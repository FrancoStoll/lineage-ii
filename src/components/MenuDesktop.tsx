export const MenuDesktop = () => {
  return (
    <ul className="hidden xl:flex gap-10 uppercase flex-1 items-center justify-center">
      <li className="hover:text-orange-300 transition-colors cursor-pointer">
        Features
      </li>
      <li className="hover:text-orange-300 transition-colors cursor-pointer">
        Forum
      </li>
      <li className="hover:text-orange-300 transition-colors cursor-pointer">
        Epic Boss
      </li>
      <li className="hover:text-orange-300 transition-colors cursor-pointer">
        Support
      </li>
      <li className="hover:text-orange-300 transition-colors cursor-pointer">
        Schedules
      </li>
    </ul>
  );
};
