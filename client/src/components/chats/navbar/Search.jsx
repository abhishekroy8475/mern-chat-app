import { Search2Icon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

const Search = () => {
  return (
    <>
      <Button rightIcon={<Search2Icon />} colorScheme="blue">
        Search Users...
      </Button>
    </>
  );
};

export default Search;
