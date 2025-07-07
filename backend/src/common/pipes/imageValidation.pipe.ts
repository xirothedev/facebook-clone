import { type PipeTransform, Injectable, BadRequestException } from "@nestjs/common";
import { FileTypeValidator } from "@nestjs/common";

const fileTypeRegex = /\/(jpg|jpeg|png|webp)$/;

@Injectable()
export class FilesIsImageValidationPipe implements PipeTransform {
	async transform(files: Express.Multer.File[]) {
		const fileTypeValidator = new FileTypeValidator({
			fileType: fileTypeRegex,
		});
		// Validate all files are images, handling async properly
		return Promise.all(files.map((file) => fileTypeValidator.isValid(file))).then((results) => {
			if (results.some((isValid) => !isValid)) {
				throw new BadRequestException("Only image files are allowed");
			}
			return files;
		});
	}
}

@Injectable()
export class FileIsImageValidationPipe implements PipeTransform {
	async transform(file: Express.Multer.File) {
		console.log(file);
		const fileTypeValidator = new FileTypeValidator({
			fileType: fileTypeRegex,
		});
		const validFile = await fileTypeValidator.isValid(file);
		if (!validFile) {
			throw new BadRequestException("Only image files are allowed");
		}
		return file;
	}
}
