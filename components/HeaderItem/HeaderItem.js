function HeaderItem({ Icon, title }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-12 hover:text-white hover:animate-bounce">
      <Icon className="h-8 mb-1 " />
      <p className="opacity-0  group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
