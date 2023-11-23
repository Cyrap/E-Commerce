'use client'
import { useState, useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../store/firebase";
import Image from "next/image";
import ProductPopup from './ProductPopUp';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageURL: string;
}

const Products = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const productCollectionRef = collection(db, "products");

  useEffect(() => {
    const getProductList = async () => {
      try {
        const data = await getDocs(productCollectionRef);
        const filteredData: any = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProductList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    getProductList();
  }, []);

  const openProductPopup = (product: any) => {
    setSelectedProduct(product);
  };

  const closeProductPopup = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {productList.map((product) => (
            <BlurImage
              key={product.id}
              image={product}
              onClick={() => openProductPopup(product)}
            />
          ))}
          {selectedProduct && (
            <ProductPopup product={selectedProduct} onClose={closeProductPopup} />
          )}
        </div>
      </div>
    </>
  );
};

function BlurImage({ image, onClick }: { image: Product; onClick: () => void }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div
      className="cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt=""
          src={image.imageURL}
          layout="fill"
          objectFit="cover"
          className={`duration-700 ease-in-out group-hover:opacity-75 ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}`}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{image.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{image.price}</p>
    </div>
  );
}

export default Products;
