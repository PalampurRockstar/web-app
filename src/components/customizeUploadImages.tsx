import { useEffect, useMemo, useState } from "react";
import { PhotoAlbum, RenderPhoto } from "react-photo-album";
import type { Photo, RenderRowContainer } from "react-photo-album";
import { CustomizeUploadImagesStyle } from "style/components/customize-uploadImages-style";
import { getImageSize } from "utils/imageProcessing";
import AddIcon from "@mui/icons-material/Add";
import { Button, Divider, Fab, Input, Skeleton } from "@mui/material";
import useProcessImages from "hooks/useProcessImages";
import { limitArray } from "utils/arrayProcessing";
import { UploadImageButton } from "./uploadImageButton";
import { PetOnboarrding } from "models/model";

export interface CustomizeUploadImagesProp {
  images: string[];
  handleUpload: (e: any, key: keyof PetOnboarrding) => void;
  limit: number;
  keyName: keyof PetOnboarrding;
  label: string;
}
export const CustomizeUploadImages = ({
  images,
  handleUpload,
  limit,
  keyName,
  label,
}: CustomizeUploadImagesProp) => {
  const { loading, processImages, processedImages } = useProcessImages();
  const { isSluced, sliced } = limitArray(images, limit);
  const IfUnderInLimit = images.length < limit;
  useMemo(
    () =>
      processImages(
        sliced.length > 0 && IfUnderInLimit ? [...sliced, "Add"] : sliced
      ),
    [images]
  );

  const renderRowContainer: RenderRowContainer = ({
    rowContainerProps,
    rowIndex,
    rowsCount,
    children,
  }) => (
    <>
      <div {...rowContainerProps}>{children}</div>
      {rowIndex < rowsCount - 1 && (
        <div
          style={{
            borderTop: "2px solid #eee",
          }}
        />
      )}
    </>
  );

  const renderPhoto: RenderPhoto = ({
    imageProps: { alt, style, src, ...restImageProps },
    layout: { index },
  }) => {
    if (index === images.length && IfUnderInLimit) {
      return (
        <label className="add-button">
          <input
            style={{ display: "none" }}
            type="file"
            onChange={(e) => handleUpload(e, keyName)}
          />
          <Fab size="small" component="span" variant="circular">
            <AddIcon style={{ fontSize: "50px" }} />
          </Fab>
        </label>
      );
    }
    return (
      <div
        style={{
          border: "2px solid #eee",
          borderRadius: "4px",
          boxSizing: "content-box",
          alignItems: "center",
          width: style?.width,
        }}
      >
        <img
          style={{ ...style, width: "100%", padding: 0 }}
          src={src}
          //   {...restImageProps}
        />
      </div>
    );
  };
  return (
    <CustomizeUploadImagesStyle>
      <Divider textAlign="left" className="header-section">
        {`${label} pictures`}
      </Divider>
      {images?.length == 0 ? (
        <UploadImageButton
          handleUpload={(e) => handleUpload(e, keyName)}
          label={`Add pictures`}
        />
      ) : (
        <PhotoAlbum
          layout="rows"
          photos={processedImages}
          spacing={0}
          padding={0}
          targetRowHeight={100}
          renderPhoto={renderPhoto}
          renderRowContainer={renderRowContainer}
        />
      )}
    </CustomizeUploadImagesStyle>
  );
};
