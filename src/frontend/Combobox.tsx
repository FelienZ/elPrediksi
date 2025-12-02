import { Check, ChevronsUpDown } from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover"
import { Button } from "../components/ui/button"
import { cn } from "../lib/utils"
import type { DSProps } from "../utils/types/DS/FormProps"

export default function Combobox({open, setOpen, value, setValue, list} : Omit<DSProps, 'isLoading' | 'setIsLoading' | 'setQuery' | 'query' | 'recommendations' | 'setRecommendations'>) {
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value.title !==''
            ? list.find((l) => l.title === value.title)?.title
            : "Search for Movie..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput value={value?.title} onValueChange={(val)=>setValue({...value, title:val})} placeholder="Search Movie..." className="h-9" />
          <CommandList>
            <CommandEmpty>No Movie found.</CommandEmpty>
            <CommandGroup>
              {list.map((l) => (
                <CommandItem
                  key={l.id}
                  value={l.title}
                  className="mb-1"
                  onSelect={(currentValue) => {
                    setValue({...value, title: currentValue === value.title ? "" : currentValue, id: l.id})
                    setOpen(false)
                  }}
                >
                  {l.title}
                  <Check
                    className={cn(
                      "ml-auto",
                      value.title === l.title ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
