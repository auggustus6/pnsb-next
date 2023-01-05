import Script from "next/script";
import { ReactNode } from "react";
import * as Styles from "./styles";

type DisqusProps = {
  children?: ReactNode;
  className?: string;
};

const Disqus = ({ children, className }: DisqusProps) => {
  return (
    <Styles.Wrapper className={className}>
      <div id="disqus_thread"></div>
      <Script>{`
        (function() { // DON'T EDIT BELOW THIS LINE
          var d = document, s = d.createElement('script');
          s.src = 'https://pnsbrasil.disqus.com/embed.js';
          s.setAttribute('data-timestamp', +new Date());
          (d.head || d.body).appendChild(s);
          })();
      `}</Script>
    </Styles.Wrapper>
  );
};

export default Disqus;
