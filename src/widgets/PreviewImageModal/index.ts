import { $currentImage, events, modalModel } from "./modal";
import { ImageModal } from "./ui";

export const previewModalModel = {
  $currentImage,
  ...modalModel,
  events: {
    ...modalModel.events,
    ...events,
  },
};

export const PreviewImageModal = ImageModal;
