export type linksTypes = {
  url: String
  name: String
  subMenu?: {
    url: String
    name: String
  }[]
}

export interface navBarTypes {
  logo: string
  links: linksTypes[]
}
