import { Text } from "./Text";

const Testimonial = () => {
  return (
    <div className="max-w-md cursor-pointer rounded-lg border border-gray-100 bg-white p-4 hover:shadow-lg">
      <img
        className="h-10 contrast-0"
        src="https://cdn.sanity.io/images/qnrs6r79/production/634edb8df4fe374c2672bb9269be83a8fb2d00c4-98x62.svg"
      ></img>
      <div className="my-2">
        <Text size="sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit dolores,
          facere mollitia assumenda tempora necessitatibus magni ad repellat
          quos debitis ipsum maxime hic.
        </Text>
      </div>
      <div className="flex gap-3 py-1">
        <img
          className="h-12 w-12 rounded-full"
          src="https://cdn.sanity.io/images/qnrs6r79/production/0d4926f93173f72610e9d8ed2b6e879cace766c4-1284x1108.png?w=2000&fit=max&auto=format"
        />
        <div className="flex flex-col">
          <Text size="xs" color="neutral-900" weight="medium">
            Daniel Boulud
          </Text>
          <Text size="xs">Owner</Text>
        </div>
      </div>
    </div>
  );
};

export { Testimonial };
