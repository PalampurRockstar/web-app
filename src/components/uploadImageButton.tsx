import { Fab } from "@mui/material";
import { UploadImageButtonProp } from "pages/petOnboarding";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
export const UploadImageButton = ({
  handleUpload,
  label,
}: UploadImageButtonProp) => (
  <label className="upload-photo">
    <input
      style={{ display: "none" }}
      id="upload-photo"
      name="upload-photo"
      type="file"
      onChange={handleUpload}
    />
    <Fab
      // color="primary"
      size="small"
      component="span"
      aria-label="add"
      variant="extended"
    >
      <AddCircleOutlinedIcon />
      {label}
    </Fab>
  </label>
);
