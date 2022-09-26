import { Text } from "./Text";

const Testimonial = () => {
  return (
    <div className="max-w-md rounded-lg border border-gray-100 bg-white p-4 shadow-md">
      <Text size="sm" weight="medium" color="neutral-900">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
      <div className="my-2">
        <Text size="sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit dolores,
          facere mollitia assumenda tempora necessitatibus magni ad repellat
          quos debitis ipsum maxime hic.
        </Text>
      </div>
      <div className="flex gap-3">
        <img
          className="h-12 w-12 rounded-full"
          src="https://cdn.sanity.io/images/qnrs6r79/production/0d4926f93173f72610e9d8ed2b6e879cace766c4-1284x1108.png?w=2000&fit=max&auto=format"
        />
        <div className="flex flex-col">
          <Text size="xs" color="neutral-900" weight="medium">
            Jamo Foo
          </Text>
          <Text size="xs">Owner, real estate inc</Text>
        </div>
      </div>
    </div>
  );
};

export { Testimonial };
