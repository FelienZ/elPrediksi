import type { Users } from "./Users";

// userid, listMovie
export interface ListMovie extends Users{
    movies: string[]
}