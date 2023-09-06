import { twMerge } from "tailwind-merge";

type FooterProps = {
  className?: string;
};

function Footer({ className }: FooterProps) {
  return (
    <footer
      className={twMerge(
        "text-center text-sm sm:text-end md:text-base",
        className,
      )}
    >
      <p>
        Made by <a href="https://btreiner.com">Ben Reiner</a>
      </p>
      <p>
        View the source code over on{" "}
        <a href="https://github.com/reinerb/cross-stitch-calculator">GitHub</a>
      </p>
      <p>
        Favicon by Smashicons on{" "}
        <a
          href="https://www.flaticon.com/free-icons/stitching"
          title="stitching icons"
          target="_blank"
        >
          Flaticon
        </a>
      </p>
    </footer>
  );
}

export default Footer;
