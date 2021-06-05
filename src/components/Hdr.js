import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/pine-tree-fire";

const Hdr = () => {
  return (
    <header className="header">
      <h1>
        <Icon icon={locationIcon} /> Wildlife Tracker (Powered by NASA)
      </h1>
    </header>
  );
};
export default Hdr;
