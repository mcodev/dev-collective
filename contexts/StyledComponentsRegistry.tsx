/* eslint-disable react/jsx-no-useless-fragment */
import isPropValid from '@emotion/is-prop-valid';
import { useServerInsertedHTML } from 'next/navigation';
import React, { useState } from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

const StyledComponentsRegistry = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  /*
During server rendering, styles will be extracted to a global registry and flushed to the <head> of your HTML.
This ensures the style rules are placed before any content that might use them.
In the future, we may use an upcoming React feature to determine where to inject the styles.
During streaming, styles from each chunk will be collected and appended to existing styles.
After client-side hydration is complete, styled-components will take over as usual and inject any further dynamic styles.
We specifically use a Client Component at the top level of the tree for the style registry because it's more efficient to extract CSS rules this way.
It avoids re-generating styles on subsequent server renders, and prevents them from being sent in the Server Component payload.
*/
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  /*
Should forward prop is used to catch and remove prop styling that is not valid html props.
For example on click is a valid prop for a button but if we create a custom prop in our styled component styled.Button
called onClickedThisAwesomeButton this prop should not be passed on the html element on dom.
More info under Transient props in styled components doc.
*/

  return (
    <StyleSheetManager
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === 'string'
          ? isPropValid(propName)
          : true;
      }}
    >
      {children}
    </StyleSheetManager>
  );
};

export default StyledComponentsRegistry;
