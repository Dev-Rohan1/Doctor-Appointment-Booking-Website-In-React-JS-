const SectionTtitle = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <h1 className="capitalize text-3xl font-semibold mb-3 ">{title}</h1>
      <p className="max-w-[420px] m-auto">{subtitle}</p>
    </div>
  );
};

export default SectionTtitle;
