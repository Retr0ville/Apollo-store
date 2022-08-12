import { gql } from '@apollo/client'
// const testId = "huarache-x-stussy-le"

export const productById =(id: string)=>{
return gql`product(id: ${id}) {
      name
      id
      brand
      description
      category
      inStock
      description
      gallery
      attributes {
        id
        items {
          displayValue
          id
          value
        }
        name
        type
      }
    }`
  }
export const allCategories =()=>{
return gql`{
    categories {
      name
      products {
        attributes {
          id
          items {
            displayValue
            id
            value
          }
          name
          type
        }
        prices {
          amount
          currency {
            label
            symbol
          }
        }
        id
        description
        brand
        gallery
        category
        inStock
      }
    }
  }`
}

export const CategoryById =(title: string)=>{
return gql`category(input: { title: ${title} }) {
    products {
      name
      prices {
        amount
        currency {
          label
          symbol
        }
      }
      id
      description
      brand
      gallery
      category
      inStock
    }
  }`
}
export const currencies =()=>{
  return gql`{
    currencies {
      label
      symbol
    }
  }`
}
