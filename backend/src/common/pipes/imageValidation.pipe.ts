import { PipeTransform, Injectable, BadRequestException } from "@nestjs/common";
import { FileTypeValidator } from "@nestjs/common";

@Injectable()
export class FilesIsImageValidationPipe implements PipeTransform {
    transform(files: Express.Multer.File[]) {
        const fileTypeValidator = new FileTypeValidator({
            fileType: /\/(jpg|jpeg|png|webp)$/,
        });
        const isValidImgs = files
            .map((file) => fileTypeValidator.isValid(file))
            .find((v) => !v);
        if (isValidImgs) {
            throw new BadRequestException("Only image files are allowed");
        }

        return files;
    }
}

@Injectable()
export class FileIsImageValidationPipe implements PipeTransform {
    transform(file: Express.Multer.File) {
        console.log(file);
        const fileTypeValidator = new FileTypeValidator({
            fileType: /\/(jpg|jpeg|png|webp)$/,
        });
        const validFile = fileTypeValidator.isValid(file);
        if (!validFile) {
            throw new BadRequestException("Only image files are allowed");
        }
        return file;
    }
}
