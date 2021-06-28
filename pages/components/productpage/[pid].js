import Link from 'next/link'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { setProducts } from '../../../redux/actions/main'
import { useRef } from 'react'
import styles from '../../../styles/Home.module.css'

function ProductPage(props) {
  const router = useRouter()
  const { pid } = router.query
  const imgRef = useRef(null)
  const productList = props.data.main.info.products
  let currentProduct
  for (const product of productList) {
    if (product.productCode == pid) {
      currentProduct = product
    }
  }
  const { defaultColorCode, listPrice, productDescription, colors } = currentProduct
  return (
    <div className={styles.productPageContainer}>
      <img
        className={styles.productPageImg}
        src={`https://www.jcrew.com/s7-img-facade/${pid}_${defaultColorCode}`}
        ref={imgRef}
      ></img>
      <div className={styles.productPageInfoContainer}>
        <div>{productDescription}</div>
        <div>Price: {listPrice.formatted}</div>
        {colors.map((color, idx) => (
          <img
            src={`https://www.jcrew.com/s7-img-facade/${pid}_${color.colorCode}_sw`}
            className={styles.dot}
            onMouseOver={() => imgRef.current.src = `https://www.jcrew.com/s7-img-facade/${pid}_${color.colorCode}_sw`}
            onMouseOut={() => imgRef.current.src = `https://www.jcrew.com/s7-img-facade/${pid}_${defaultColorCode}`}
            key={idx}
          ></img>
        ))}
        <div><Link href="/"><a>Click me to head back home!</a></Link></div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  data: state
})

const mapDispatchToProps = {
  setProducts: setProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)
