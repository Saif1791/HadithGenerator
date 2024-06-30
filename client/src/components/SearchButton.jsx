/* eslint-disable react/prop-types */
import { Button } from "@nextui-org/react";

function SearchButton(props) {
  return (
    <div className="flex justify-center">
      <Button
        color="success"
        variant="ghost"
        className="w-30 mt-5 text-white"
        onClick={props.getHadith}
      >
        Enlighten Me!
      </Button>
    </div>
  );
}

export default SearchButton;
