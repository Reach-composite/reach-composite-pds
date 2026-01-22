const WhoIsThisForSection = () => {
  return (
    <section className="py-12 bg-cacae0">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-6"
          style={{ color: "#a61042" }}
        >
          Who is REACH Composites PDS for?
        </h2>

        <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
          REACH Composites PDS is built for industries and teams that design and
          develop composite products and want to improve accuracy, speed, and
          efficiency in pattern design and development.
        </p>

        <ul className="max-w-3xl mx-auto space-y-4 text-lg text-muted-foreground list-disc list-inside">
          <li>
            Aerospace and aviation manufacturers optimizing composite material
            usage for aircraft components like wings and fuselages.
          </li>
          <li>
            Automotive companies, including electric vehicle producers, focused
            on lightweight composite parts to improve efficiency and reduce
            production waste.
          </li>
          <li>
            Marine industry professionals, such as boat and yacht builders,
            using composites for hulls and structures.
          </li>
          <li>
            Wind energy firms designing and producing turbine blades from
            composite materials to minimize material costs.
          </li>
          <li>
            Sports and recreational equipment manufacturers creating items like
            bicycles, skis, and golf clubs with carbon fiber composites.
          </li>
          <li>
            Research and development teams in materials engineering or academic
            institutions simulating composite nesting for innovation and
            training.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhoIsThisForSection;
