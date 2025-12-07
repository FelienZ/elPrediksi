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

export default function Combobox({open, setOpen, value, setValue, list} : Omit<DSProps, 'isLoading' | 'setIsLoading' | 'setQuery' | 'query' | 'recommendations' | 'setRecommendations' | 'setMovie'>) {
  function checkNumber(v: number): number{
        return isNaN(v) ? 0 : v
    }
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {checkNumber(value.userId) !== 0 ? (
            `User-${value.userId}`
          ): 'Search for User...'}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput onValueChange={(val)=>setValue({...value, userId:Number(val)})} placeholder="Search User..." className="h-9" />
          <CommandList>
            <CommandEmpty>No Match User Found.</CommandEmpty>
            <CommandGroup>
              {list.map((l) => (
                <CommandItem
                  key={`user-${l}`}
                  value={l.toString()}
                  className="mb-1"
                  onSelect={(currentValue) => {
                    setValue({...value, userId: Number(currentValue)})
                    setOpen(false)
                  }}
                >
                  {`user-${l}`}
                  <Check
                    className={cn(
                      "ml-auto",
                      value.userId === l.userId ? "opacity-100" : "opacity-0"
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
