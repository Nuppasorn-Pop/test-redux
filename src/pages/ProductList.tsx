import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function ProductList() {
  return (
    <div className="bg-custom container p-5">
      <div className="row">
        <div className="col-12 col-md-8 p-5">
          <LeftSide />
        </div>
        <div className="col-12 col-md-4 py-5">
          <RightSide />
        </div>
      </div>
    </div>
  );
}
