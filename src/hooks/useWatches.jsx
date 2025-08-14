import { useState, useEffect } from "react";
import { Watch } from "../models/watch";

export function useWatches() {
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchWatches = async () => {
      try {
        setLoading(true);

        const sampleData = [
          new Watch(
            1,
            'Casio F-91W Black',
            'Black',
            15.00,
            'Casio',
            1989,
            'https://www.casio.com/content/dam/casio/product-info/locales/mx/es-ar/timepiece/product/watch/F/F9/F91/f-91wb-1a/assets/F-91WB-1A.png.transform/product-panel/image.png'
          ),
          new Watch(
            2,
            'Casio F-91W Blue',
            'Blue',
            15.00,
            'Casio',
            1989,
            'https://tiendascasio.titec.co/cdn/shop/files/F-91WB-2A1DF.jpg?v=1731077868'
          ),
          new Watch(
            3,
            'Rolex Submariner Black Dial',
            'Black',
            11200,
            'Rolex',
            2020,
            'https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_3840/v1/catalogue/2025/upright-c/m126610ln-0001'
          ),
          new Watch(
            5,
            'Omega Seamaster Diver 300M Blue',
            'Blue',
            5500,
            'Omega',
            2022,
            'https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-diver-300m-co-axial-master-chronometer-42-mm-21030422003001-5c4934.png?w=2000'
          ),
          new Watch(
            6,
            'Omega Seamaster Diver 300M Black',
            'Black',
            5300,
            'Omega',
            2021,
            'https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-diver-300m-co-axial-master-chronometer-43-5-mm-21092442001001-02ce24.png?w=2000'
          ),
          new Watch(
            7,
            'Patek Philippe Calatrava Yellow Gold',
            'Gold',
            33000,
            'Patek Philippe',
            2019,
            'https://patek-res.cloudinary.com/dfsmedia/0906caea301d42b3b8bd23bd656d1711/202400-51908'
          ),
          new Watch(
            8,
            'Audemars Piguet Royal Oak Steel',
            'Steel',
            28000,
            'Audemars Piguet',
            2020,
            'https://www.watchguynyc.com/cdn/shop/products/WatchGuyNYC_APO38_Audemars_Piguet_Royal_Oak_Blue_Dial_Extra-Thin_Stainless_steel_Watch_15202ST.OO.1240ST.01_b56a8fab-a032-41c7-b508-fcf1cde06a6e_large.jpg?v=1729081347'
          ),
          new Watch(
            9,
            'TAG Heuer Carrera Chronograph Silver',
            'Silver',
            6000,
            'TAG Heuer',
            2023,
            'https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dwa5866d17/TAG_Heuer_Carrera/CBS2216.BA0048/CBS2216.BA0048_0913.png'
          ),
          new Watch(
            10,
            'Richard Mille RM 43-01 Titanium',
            'Titanium',
            1500000,
            'Richard Mille',
            2025,
            'https://media.richardmille.com/wp-content/uploads/2025/02/19122038/RM43-01.png?dpr=3&width=900'
          ),
          new Watch(
            11,
            'Rolex Submariner 126610LN Black',
            'Black',
            10250,
            'Rolex',
            2020,
            'https://luxurywatchesusa.com/wp-content/uploads/2023/07/Rolex-126610LN-stock-1.jpg.webp'
          ),
          new Watch(
            12,
            'Rolex Submariner 126610LV Green',
            'Green',
            10800,
            'Rolex',
            2020,
            'https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_3840/v1/catalogue/2025/upright-c/m126610lv-0002'
          ),
          new Watch(
            13,
            'Rolex Submariner 126613LN Black/Gold',
            'Black/Gold',
            16150,
            'Rolex',
            2020,
            'https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_3840/v1/catalogue/2025/upright-c/m126613ln-0002'
          ),
          new Watch(
            14,
            'Rolex Submariner 126613LB Blue/Gold',
            'Gold',
            16150,
            'Rolex',
            2020,
            'https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_3840/v1/catalogue/2025/upright-c/m126613lb-0002'
          ),
          new Watch(
            15,
            'Rolex Submariner 126618LN Solid Gold Black',
            'Gold',
            40600,
            'Rolex',
            2020,
            'https://www.aviandco.com/media/catalog/product/cache/a296d93d2b66a6f0868f5cbf040cc293/r/o/rolex_submariner_126618ln-1_2.jpg'
          ),
          new Watch(
            16,
            'Rolex Submariner 126619LB White Gold Blue',
            'Blue',
            43700,
            'Rolex',
            2020,
            'https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_3840/v1/catalogue/2025/upright-c/m126619lb-0003'
          ),
          new Watch(
            17,
            'Rolex Explorer II Black Dial',
            'Black',
            8750,
            'Rolex',
            2021,
            'https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_3840/v1/catalogue/2025/upright-c/m226570-0002'
          ),
          new Watch(
            18,
            'Rolex Explorer II White Dial',
            'White',
            8750,
            'Rolex',
            2021,
            'https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_3840/v1/catalogue/2025/upright-c/m226570-0001'
          ),
          new Watch(
            19,
            'Rolex Sea-Dweller 126600 Black',
            'Black',
            12500,
            'Rolex',
            2017,
            'https://goldcenter.com.co/img-rolex/watches-models/m126600-0002-drp-upright-bba-with-shadow-landscape.webp'
          ),
          new Watch(
            20,
            'Casio AE-1000W Black',
            'Black',
            20,
            'Casio',
            2010,
            'https://i.ebayimg.com/thumbs/images/g/jvwAAeSwYv1of7jB/s-l1200.jpg'
          ), 
          new Watch(
            21,
            'Casio AE-1000W Green',
            'Green',
            22,
            'Casio',
            2010,
            'https://exitocol.vtexassets.com/arquivos/ids/13375753/reloj-casio-ae-1000w-3a-para-hombre-verde-ultuima.jpg?v=637916855768600000'
          ),
          new Watch(
            22,
            'Casio CA-53W Black',
            'Black',
            30,
            'Casio',
            1988,
            'https://www.casio.com/content/dam/casio/product-info/locales/us/en/timepiece/product/watch/C/CA/CA5/ca-53wb-1b/assets/CA-53WB-1B.png.transform/main-visual-sp/image.png'
          ),
          new Watch(
            23,
            'Casio CA-53WF Inverted Black',
            'Black',
            35,
            'Casio',
            2020,
            'https://m.media-amazon.com/images/I/41xgEQlKT7L.jpg'
          ),
          new Watch(
            24,
            'TAG Heuer Monaco Calibre 11',
            'Blue',
            7450.00,
            'TAG Heuer',
            2022,
            'https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw6d697770/TAG_Heuer_Monaco/CAW211P.FC6356/CAW211P.FC6356_1000.png'
          ),
          new Watch(
            25,
            'Grand Seiko Snowflake',
            'White',
            5800.00,
            'Seiko',
            2023,
            'https://www.grand-seiko.com/us-en/-/media/Images/Product--Image/All/GrandSeiko/2022/02/19/21/47/SBGA211G/SBGA211G.png'
          ),
          new Watch(
            26,
            'Omega Speedmaster Moonwatch Black',
            'Black',
            6200,
            'Omega',
            2023,
            'https://zimsonwatches.com/cdn/shop/files/omega-speedmaster-moonwatch-professional-co-axial-master-chronometer-chronograph-42-mm-31032425001002-78e3aa.png?v=1708751671'
          ),
          new Watch(
            27,
            'Omega Speedmaster Moonwatch White',
            'White',
            6200,
            'Omega',
            2023,
            'https://www.omegawatches.com/media/catalog/product/o/m/omega-speedmaster-moonwatch-professional-co-axial-master-chronometer-chronograph-42-mm-31060425002001-watch-wrist-96f1f5.png'
          ),
          new Watch(
            28,
            'Patek Philippe Nautilus Blue',
            'Blue',
            40000,
            'Patek Philippe',
            2021,
            'https://firstclasstimepieces.com/cdn/shop/products/5811_1G_001_1_2x_900c740d-763a-4f8c-9def-b33f2744bc7e_620x.png?v=1667321091'
          ),
          new Watch(
            29,
            'Patek Philippe Nautilus White',
            'White',
            40000,
            'Patek Philippe',
            2021,
            'https://firstclasstimepieces.com/cdn/shop/products/patek-philippe-nautilus-40mm-57111a-white-dial-first-class-timepieces.jpg?v=1608028261'
          ),
          new Watch(
            30,
            'Audemars Piguet Royal Oak Chronograph Blue',
            'Blue',
            35000,
            'Audemars Piguet',
            2022,
            'https://watchlab.ae/upload/iblock/01a/561mmjwhiu35iqn3fqghq5cz0zktt8rg.jpg'
          ),
          new Watch(
            31,
            'Audemars Piguet Royal Oak Chronograph Grey',
            'Grey',
            35000,
            'Audemars Piguet',
            2022,
            'https://img.chrono24.com/images/uhren/15704639-tvn9ou4ues9rurayh4ow1h4u-ExtraLarge.jpg'
          ),
          new Watch(
            32,
            'TAG Heuer Carrera Chronograph Blue',
            'Blue',
            6000,
            'TAG Heuer',
            2023,
            'https://www.berrysjewellers.co.uk/cdn/shop/files/tag-heuer-carrera-42mm-blue-dial-automatic-chronograph-bracelet-watch-cbn2011-ba0642-72726413181310.png?v=1737367189&width=800'
          ),
          new Watch(
            33,
            'TAG Heuer Carrera Chronograph Black',
            'Black',
            6000,
            'TAG Heuer',
            2023,
            'https://www.gregoryjewellers.com.au/wp-content/uploads/2024/03/CBS2210.FC6534_Tag-heuer-carrera-chronograph-black-39mm-5.jpg'
          ),
          new Watch(
            34,
            'Cartier Santos Large Steel',
            'Steel',
            7200,
            'Cartier',
            2023,
            'https://www.tourneau.com/on/demandware.static/-/Sites-master-catalog/default/dw7725cb31/images/large/wssa0009-cartier-santos-de-cartier-steel-large-CAR0120182.png'
          ),
          new Watch(
            35,
            'Cartier Santos Large Rose Gold',
            'Rose Gold',
            15000,
            'Cartier',
            2023,
            'https://cdn.swisswatchexpo.com/productphotos/9/20/cartier-santos-100-midsize-rose-gold-silver-dial-mens-watch-w20108y1-box-card-45843_6cb65.jpg'
          ),
          new Watch(
            36,
            'Rolex GMT-Master II Pepsi',
            'Red',
            20595,
            'Rolex',
            2022,
            'https://cdn-images.farfetch-contents.com/22/22/38/96/22223896_51974358_600.jpg'
          ),
          new Watch(
            37,
            'Rolex GMT-Master II Batman',
            'Blue',
            20595,
            'Rolex',
            2022,
            'https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_3840/v1/catalogue/2025/upright-c/m126710blnr-0002'
          ),
        ];
        const data = await new Promise((resolve) =>
          setTimeout(() => resolve(sampleData), 200)
        );

        setWatches(data);
      } catch (err) {
        setError(err.message || "Error cargando los relojes");
      } finally {
        setLoading(false);
      }
    };

    fetchWatches();
  }, []);

  return { watches, loading, error };
}



