import React, { ReactNode } from 'react';

import './page.scss';

interface PageProps {
  children: ReactNode | ReactNode[];
  header?: ReactNode;
}

const Page = ({ children, header = null }: PageProps): JSX.Element => (
  <section className="c-page">
    <header className="c-page__header">{header}</header>
    <div className="c-page__content">{children}</div>
  </section>
);

export default Page;
