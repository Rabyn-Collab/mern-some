import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";



export function CardList({ meals }) {
  return (
    <Card className="max-w-[40%]">
      <CardBody>
        <div className="mb-4 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="">
            Dishes
          </Typography>

        </div>
        <div className="divide-y divide-gray-200">
          {meals.map(({ strMeal, strMealThumb, idMeal }) => (
            <div
              key={idMeal}
              className="flex items-center justify-between pb-3 pt-3 last:pb-0"
            >
              <div className="flex items-center gap-x-3">
                <Avatar size="sm" src={strMealThumb} alt={idMeal} />
                <div>
                  <Typography color="blue-gray" variant="h6">
                    {strMeal}
                  </Typography>

                </div>
              </div>
              <Typography color="blue-gray" variant="h6">
                ${900}
              </Typography>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}