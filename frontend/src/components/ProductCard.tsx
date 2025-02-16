
interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div className="group w-24"> {/* Adjust the width of the card */}
      <div className="aspect-video bg-gray-100 lg:h-[9.4rem] md:h-40  lg:mx-20"> {/* Adjust the height of the card */}
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover group-hover:opacity-75 transition-opacity"
        />
      </div>
      <div className="mt-4 flex justify-between px-28 w-max">
          <h3 className="text-sm font-semibold font-crimson text-black">{name}</h3>
      </div>
    </div>
  );
}