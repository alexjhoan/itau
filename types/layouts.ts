export type linksTypes = {
  url: String
  name: String
  icon?: boolean
  subMenu?: {
    url: String
    name: String
  }[]
}

export interface navBarTypes {
  logo: string
  links: linksTypes[]
}
