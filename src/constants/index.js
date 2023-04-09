// PRODUCTOS DEL DIA
import image2 from '../imgs/producto2.jpg'
import image3 from '../imgs/producto3.jpg'
import image4 from '../imgs/producto4.png'
import image5 from '../imgs/producto5.jpg'

// PRODUCTOS DE LA SEMANA
import imgSemana1 from '../imgs/prodSemana1.jpg'
import imgSemana2 from '../imgs/prodSemana2.jpg'
import imgSemana3 from '../imgs/prodSemana3.jpg'
import imgSemana4 from '../imgs/prodSemana4.jpg'
import imgSemana5 from '../imgs/prodSemana5.png'
import imgSemana6 from '../imgs/prodSemana6.jpg'
import imgSemana7 from '../imgs/prodSemana7.png'

// Ultimos Productos
import ultimosProd1 from '../imgs/ultimosProd1.jpg'
import ultimosProd2 from '../imgs/ultimosProd2.webp'
import ultimosProd3 from '../imgs/ultimosProd3.jpg'
import ultimosProd4 from '../imgs/ultimosProd4.png'
import ultimosProd5 from '../imgs/ultimosProd5.jpg'
import ultimosProd6 from '../imgs/ultimosProd6.webp'

// Combos
import combo1 from '../imgs/combo1.jpg'
import combo2 from '../imgs/combo2.jpg'
import combo3 from '../imgs/combo3.jpg'

export const PRODUCTOS_OFERTA = [
  {
    id: 1,
    marca: 'Pot',
    nombre: 'X Bioestimulante (200ml)',
    precio: '3780',
    imagen: image2,
    categoria: 'fertilizantes e insecticidas'
  },
  {
    id: 2,
    marca: 'Advanced Nutrients',
    nombre: 'Bud Candy (500ml)',
    precio: '12500',
    imagen: image4,
    categoria: 'fertilizantes e insecticidas'
  },
  {
    id: 3,
    marca: 'Hidroponia',
    nombre: 'Medidor de PH Digital Autocalibrable (New Haze)',
    precio: '3780',
    imagen: image5,
    categoria: 'hidroponia'
  },
  {
    id: 4,
    marca: 'Eden',
    nombre: 'Sustrato (25 lt)',
    precio: '1750',
    imagen: image3,
    categoria: 'sustratos'
  }
]

export const ULTIMOS_PRODUCTOS = [
  {
    id: 5,
    marca: 'Pyrex',
    nombre: 'Bong de vidrio 19 cm',
    precio: 16000,
    imagen: ultimosProd1,
    categoria: 'parafernalia'
  },
  {
    id: 6,
    marca: 'Raw',
    nombre: 'Cone pack x3 preenrolados',
    precio: 850,
    imagen: ultimosProd2,
    categoria: 'parafernalia'
  },
  {
    id: 7,
    marca: 'Klassman',
    nombre: 'Sustrato TS3 70 lt',
    precio: 6600,
    imagen: ultimosProd3,
    categoria: 'sustratos'
  },
  {
    id: 8,
    marca: 'Mars',
    nombre: 'Led mars sunflash 153w',
    precio: 152000,
    imagen: ultimosProd4,
    categoria: 'iluminacion'
  },
  {
    id: 9,
    marca: 'Carpa',
    nombre: 'Carpa 60x60x160',
    precio: 39500,
    imagen: ultimosProd6,
    categoria: 'carpas'
  },
  {
    id: 10,
    marca: 'Extractor',
    nombre: 'Extractor turbina 6 pulgadas',
    precio: 23500,
    imagen: ultimosProd5,
    categoria: 'ventilacion y extraccion'
  }
]

export const PRODUCTOS_SEMANA = [
  {
    id: 11,
    marca: 'Rolling Lion Circus',
    nombre: 'Blunt (x2 u.)',
    precio: 700,
    imagen: imgSemana1,
    categoria: 'parafernalia'
  },
  {
    id: 12,
    marca: 'Air pot',
    nombre: 'Air pot 11 lt',
    precio: 2000,
    imagen: imgSemana2,
    categoria: 'macetas'
  },
  {
    id: 13,
    marca: 'Revienta Cogollos',
    nombre: 'Bioestimulante Revienta Cogollos',
    precio: 3600,
    imagen: imgSemana3,
    categoria: 'fertilizantes e insecticidas'
  },
  {
    id: 14,
    marca: 'Boveda',
    nombre: 'Sobre Boveda p/ Curado',
    precio: 1000,
    imagen: imgSemana4,
    categoria: 'parafernalia'
  },
  {
    id: 15,
    marca: 'Tijera Para Poda / Manicurado',
    nombre: 'Tijera Para Poda / Manicurado',
    precio: 2500,
    imagen: imgSemana5,
    categoria: 'jardin'
  },
  {
    id: 16,
    marca: 'Raw',
    nombre: 'Bandeja Raw Small (26 x 17 cm)',
    precio: 4000,
    imagen: imgSemana6,
    categoria: 'parafernalia'
  },
  {
    id: 17,
    marca: 'Top Crop',
    nombre: 'Enraizante Deeper Underground (250 ml)',
    precio: 2600,
    imagen: imgSemana7,
    categoria: 'fertilizantes e insecticidas'
  }
]

export const COMBOS = [
  {
    id: 18,
    marca: 'Raw | Rollin',
    nombre: 'Combo Bandeja - Sedas - Picador - Filtros N2',
    precio: 5300,
    imagen: combo3,
    categoria: 'combos y promociones'
  },
  {
    id: 19,
    marca: 'Mad Grow',
    nombre: 'Kit Fertilizantes Mad Grow x5 (200cc)',
    precio: 7500,
    imagen: combo2,
    categoria: 'combos y promociones'
  },
  {
    id: 20,
    marca: 'CultivArg',
    nombre: 'Kit Indoor 60: CultivARG ECO 60x60x160 / GrowLed Full Spectrum 200w / Doble Extractor 4" / Poleas / Timer',
    precio: 77800,
    imagen: combo1,
    categoria: 'combos y promociones'
  },

]

export const CATEGORIAS = ['carpas', 'combos y promociones', 'fertilizantes e insecticidas', 'hidroponia', 'iluminacion', 'instrumentos de medicion', 'jardin', 'macetas', 'parafernalia', 'rosin', 'sustratos', 'ventilacion y extraccion'];

export const TODOS_LOS_PRODUCTOS = [...PRODUCTOS_OFERTA, ...PRODUCTOS_SEMANA, ...ULTIMOS_PRODUCTOS, ...COMBOS];