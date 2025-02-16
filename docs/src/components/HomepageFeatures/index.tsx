import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  iconImage: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Zero Design Dependencies",
    iconImage: "/img/logo.png",
    description: (
      <>
        Ship with zero default styles. Build your calendar UI from scratch using
        our hooks, or use our pre-built components with your own styling.
        Complete freedom in design implementation.
      </>
    ),
  },
  {
    title: "Flexible & Customizable",
    iconImage: "/img/logo.png",
    description: (
      <>
        Multiple view types (Month/Week/Day), customizable layouts, and
        extensible event handling. Use our <code>hooks</code> for complete
        control or leverage our component library for rapid development.
      </>
    ),
  },
  {
    title: "Built for React",
    iconImage: "/img/logo.png",
    description: (
      <>
        Lightweight, type-safe, and built specifically for React applications.
        Zero external dependencies, tree-shakeable, and optimized for
        performance.
      </>
    ),
  },
];

function Feature({ title, iconImage, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className={`text--center ${styles.iconImageContainer}`}>
        <img src={iconImage} className={styles.iconImage} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
