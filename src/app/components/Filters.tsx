"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useQueryState } from "nuqs";

export function Filters() {
  const [gender, setGender] = useQueryState("gender", {
    defaultValue: "",
    shallow: false,
  });
  const [status, setStatus] = useQueryState("status", {
    defaultValue: "",
    shallow: false,
  });

  return (
    <div className="flex gap-4">
      <Select value={gender} onValueChange={(value) => setGender(value)}>
        <SelectTrigger className="w-45 border-none shadow-md bg-fuchsia-500 text-white rounded-4xl">
          <SelectValue
            className=" placeholder-white"
            placeholder="Select Gender"
          />
        </SelectTrigger>
        <SelectContent className="bg-fuchsia-500 border-none shadow-md">
          <SelectGroup>
            <SelectLabel className="text-white">Gender</SelectLabel>
            <SelectItem className="text-white" value="male">
              Male
            </SelectItem>
            <SelectItem className="text-white" value="female">
              Female
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select value={status} onValueChange={(value) => setStatus(value)}>
        <SelectTrigger className="w-45 border-none shadow-md bg-fuchsia-500 text-white rounded-4xl">
          <SelectValue
            className=" placeholder-white"
            placeholder="Select Status"
          />
        </SelectTrigger>
        <SelectContent className="bg-fuchsia-500 border-none shadow-md">
          <SelectGroup>
            <SelectLabel className="text-white">Status</SelectLabel>
            <SelectItem className="text-white" value="alive">
              Alive
            </SelectItem>
            <SelectItem className="text-white" value="dead">
              Dead
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
