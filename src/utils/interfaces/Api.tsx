export interface Character {
  char_id:                     number;
  name:                        string;
  birthday:                    string;
  occupation:                  string[];
  img:                         string;
  status:                      string;
  nickname:                    string;
  appearance:                  number[];
  portrayed:                   string;
  category:                    string;
  better_call_saul_appearance: number[];
}

export interface Episodes {
  episode_id: number;
  title:      string;
  season:     string;
  air_date:   string;
  characters: string[];
  episode:    string;
  series:     Series;
}

export enum Series {
  BetterCallSaul = "Better Call Saul",
  BreakingBad = "Breaking Bad",}

export interface Quote {
  author: string,
  quote: string,
  quote_id: number
  series: string,
}