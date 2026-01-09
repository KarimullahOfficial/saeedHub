import { NotFoundException,} from '@nestjs/common';
export function responseHandler(modelObject: any) {
  if (!modelObject) {
    throw new NotFoundException();
  }
  return modelObject
  }
  