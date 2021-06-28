import React from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'
import { setProducts } from '../../redux/actions/main'
import productList from '../../public/category.json'
import ProductTile from './producttile'
import styles from '../../styles/Home.module.css'


class ProductGrid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }
  componentDidMount() {
    // The API call is being substituted by directly importing the file
    // Right after the "API call," the data is sent to the redux store
    this.props.setProducts(productList.productList[0].products)
    this.setState({
      products: productList.productList[0].products
    })
  }
  render() {
    const prods = this.state.products
    const set = new Set()
    const uniques = []
    for (const prodObj of prods) {
      const prodCode = prodObj.productCode
      if (!set.has(prodCode)) uniques.push(prodObj)
      set.add(prodObj.productCode)
    }
    return (
      <>
        {uniques.map((prod, idx) => (
          <Link href={`/components/productpage/${prod.productCode}`} key={idx}>
            {/* the link redirects users to [pid].js in the productpage folder */}
            <div className={styles.tile}>
              <ProductTile
                price={prod.listPrice.formatted}
                productCode={prod.productCode}
                defaultColorCode={prod.defaultColorCode}
                productDescription={prod.productDescription}
              />
            </div>
          </Link>
        ))}
      </>
    )
  }
}

const mapStateToProps = state => ({
  data: state
})

const mapDispatchToProps = {
  setProducts: setProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid)
