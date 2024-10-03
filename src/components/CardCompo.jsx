import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router";

export function CardCompo({ cata }) {

  const nav = useNavigate();
  return (
    <Card className="mt-6 ">
      <CardHeader color="amber" className="relative h-56">
        <img
          className="w-full"
          src={cata.strCategoryThumb}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {cata.strCategory}
        </Typography>
        <p className="line-clamp-3">
          {cata.strCategoryDescription}
        </p>
      </CardBody>
      <CardFooter className="pt-0">
        <Button onClick={() => nav(`/category-items/${cata.strCategory}`)}>Read More</Button>
      </CardFooter>
    </Card>
  );
}