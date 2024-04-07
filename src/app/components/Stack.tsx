import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';

export default function Stack() {
  const list = [
    {
      title: 'HTML',
      img: '/images/html.png',
    },
    {
      title: 'CSS',
      img: '/images/css.png',
    },
    {
      title: 'JavaScript',
      img: '/images/js.jpg',
    },
    {
      title: 'TypeScript',
      img: '/images/ts.jpg',
    },
    {
      title: 'React',
      img: 'images/react.png',
    },
    {
      title: 'Next.js',
      img: 'images/nextjs.png',
    },
    {
      title: 'Node.js',
      img: 'images/nodejs.png',
    },
    {
      title: 'Express',
      img: 'images/express.png',
    },
    {
      title: 'Tailwind CSS',
      img: 'images/tw.png',
    },
    {
      title: 'Mongo DB',
      img: 'images/mongodb.png',
    },
    {
      title: 'PostgreSQL',
      img: 'images/postgresql.png',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 lg:w-3/4">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          className="h-auto w-[110px] hover:animate-wiggle hover:animate-infinite dark:bg-gray-800"
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="justify-between text-small">
            <b>{item.title}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
