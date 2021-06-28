import styles from '../../styles/Home.module.css'

const ProductTile = ({ price, productCode, defaultColorCode, productDescription }) => (
  <div>
    <img className={styles.tileImg} src={`https://www.jcrew.com/s7-img-facade/${productCode}_${defaultColorCode}`} ></img>
    <div>{productDescription}</div>
    <div>{price}</div>
  </div>
)

export default ProductTile
