import { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

interface Props extends InputProps {
  id: string;
  name: string;
  label: string;
}

export default function CustomInput({ label, ...rest }: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType =
    rest.type === "password" && !showPassword ? "password" : "text";

  return (
    <FormControl id={rest.id} isRequired={rest.isRequired}>
      <FormLabel htmlFor={rest.name}>{label}</FormLabel>
      <InputGroup>
        <Input
          borderColor="gray.300"
          size={{ base: "sm", md: "md" }}
          {...rest}
          type={inputType}
        />
        {rest.type === "password" && (
          <InputRightElement h={"full"}>
            <Button
              variant={"ghost"}
              onClick={() => setShowPassword((showPassword) => !showPassword)}
            >
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
    </FormControl>
  );
}
