import React from 'react';
import { Accordion, ScrollArea } from '@mantine/core';
import { NavLink } from 'react-router-dom';

const linkClasses = ({ isActive }: { isActive: boolean }) =>
  [
    'block rounded border border-gray-200 px-4 py-3 shadow-sm transition-colors font-medium',
    isActive
      ? 'bg-blue-100 text-blue-800 border-blue-300'
      : 'bg-white hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700',
  ].join(' ');

const Navbar: React.FC = () => (
  <ScrollArea style={{ height: '100vh' }} type="auto" scrollbarSize={8}>
    <Accordion
      multiple
      variant="separated"
      className="w-full"
      styles={{
        item: { border: 'none' },
        control: { background: '#f8fafc' },
      }}
    >
      {/* React Concepts */}
      <Accordion.Item value="concepts">
        <Accordion.Control className="font-semibold">React Concepts</Accordion.Control>
        <Accordion.Panel>
          <ul className="pl-0 space-y-3">
            <li><NavLink to="/class-vs-function" className={linkClasses}>Class vs Function Component</NavLink></li>
            <li><NavLink to="/react-dom" className={linkClasses}>React DOM</NavLink></li>
            <li><NavLink to="/virtual-dom" className={linkClasses}>Virtual DOM</NavLink></li>
            <li><NavLink to="/error-boundary" className={linkClasses}>Error Boundaries</NavLink></li>
            <li><NavLink to="/pure-component" className={linkClasses}>PureComponent</NavLink></li>
            <li><NavLink to="/react-memo" className={linkClasses}>React.memo</NavLink></li>
            <li><NavLink to="/props-drilling" className={linkClasses}>Props Drilling</NavLink></li>
            <li><NavLink to="/state-management" className={linkClasses}>State Management Libraries</NavLink></li>
            <li><NavLink to="/context-api" className={linkClasses}>Context API</NavLink></li>
            <li><NavLink to="/forms-formik" className={linkClasses}>React Hook Form & Formik</NavLink></li>
            <li><NavLink to="/rtk-query" className={linkClasses}>RTK Query & TanStack Query</NavLink></li>
            <li><NavLink to="/accessibility" className={linkClasses}>Accessibility</NavLink></li>
            <li><NavLink to="/code-splitting" className={linkClasses}>Code-Splitting</NavLink></li>
            <li><NavLink to="/context" className={linkClasses}>Context</NavLink></li>
            <li><NavLink to="/forwarding-refs" className={linkClasses}>Forwarding Refs</NavLink></li>
            <li><NavLink to="/fragments" className={linkClasses}>Fragments</NavLink></li>
            <li><NavLink to="/hoc" className={linkClasses}>Higher-Order Components (HOC)</NavLink></li>
            <li><NavLink to="/integration" className={linkClasses}>Integrating with Other Libraries</NavLink></li>
            <li><NavLink to="/jsx-in-depth" className={linkClasses}>JSX In Depth</NavLink></li>
            <li><NavLink to="/performance" className={linkClasses}>Optimizing Performance</NavLink></li>
            <li><NavLink to="/portals" className={linkClasses}>Portals</NavLink></li>
            <li><NavLink to="/profiler" className={linkClasses}>Profiler</NavLink></li>
            <li><NavLink to="/react-without-es6" className={linkClasses}>React Without ES6</NavLink></li>
            <li><NavLink to="/react-without-jsx" className={linkClasses}>React Without JSX</NavLink></li>
            <li><NavLink to="/reconciliation" className={linkClasses}>Reconciliation</NavLink></li>
            <li><NavLink to="/refs-dom" className={linkClasses}>Refs and the DOM</NavLink></li>
            <li><NavLink to="/render-props" className={linkClasses}>Render Props</NavLink></li>
            <li><NavLink to="/static-type-checking" className={linkClasses}>Static Type Checking</NavLink></li>
            <li><NavLink to="/strict-mode" className={linkClasses}>Strict Mode</NavLink></li>
            <li><NavLink to="/prop-types" className={linkClasses}>Typechecking with PropTypes</NavLink></li>
            <li><NavLink to="/uncontrolled-components" className={linkClasses}>Uncontrolled Components</NavLink></li>
            <li><NavLink to="/web-components" className={linkClasses}>Web Components</NavLink></li>
          </ul>
        </Accordion.Panel>
      </Accordion.Item>

      {/* Hooks */}
      <Accordion.Item value="hooks">
        <Accordion.Control className="font-semibold">Hooks</Accordion.Control>
        <Accordion.Panel>
          <ul className="pl-2 space-y-3">
            <li><NavLink to="/use-state" className={linkClasses}>useState</NavLink></li>
            <li><NavLink to="/use-effect" className={linkClasses}>useEffect</NavLink></li>
            <li><NavLink to="/use-context" className={linkClasses}>useContext</NavLink></li>
            <li><NavLink to="/use-ref" className={linkClasses}>useRef</NavLink></li>
            <li><NavLink to="/use-reducer" className={linkClasses}>useReducer</NavLink></li>
            <li><NavLink to="/use-callback" className={linkClasses}>useCallback</NavLink></li>
            <li><NavLink to="/use-memo" className={linkClasses}>useMemo</NavLink></li>
            <li><NavLink to="/use-layout-effect" className={linkClasses}>useLayoutEffect</NavLink></li>
            <li><NavLink to="/use-imperative-handle" className={linkClasses}>useImperativeHandle</NavLink></li>
            <li><NavLink to="/use-debug-value" className={linkClasses}>useDebugValue</NavLink></li>
            <li><NavLink to="/use-deferred-value" className={linkClasses}>useDeferredValue</NavLink></li>
            <li><NavLink to="/use-transition" className={linkClasses}>useTransition</NavLink></li>
            <li><NavLink to="/use-id" className={linkClasses}>useId</NavLink></li>
            <li><NavLink to="/custom-hooks" className={linkClasses}>Custom Hooks</NavLink></li>
          </ul>
        </Accordion.Panel>
      </Accordion.Item>

      {/* Lifecycle Methods */}
      <Accordion.Item value="lifecycle">
        <Accordion.Control className="font-semibold">Lifecycle Methods</Accordion.Control>
        <Accordion.Panel>
          <ul className="pl-2 space-y-3">
            <li><NavLink to="/mount" className={linkClasses}>Mount</NavLink></li>
            <li><NavLink to="/update" className={linkClasses}>Update</NavLink></li>
            <li><NavLink to="/unmount" className={linkClasses}>Unmount</NavLink></li>
          </ul>
        </Accordion.Panel>
      </Accordion.Item>

      {/* Multi-threaded */}
      <Accordion.Item value="multi-thread">
        <Accordion.Control className="font-semibold">Multi Threaded</Accordion.Control>
        <Accordion.Panel>
          <ul className="pl-0 space-y-3">
            <li><NavLink to="/without-thread" className={linkClasses}>Without Thread</NavLink></li>
            <li><NavLink to="/with-thread" className={linkClasses}>With Thread</NavLink></li>
          </ul>
        </Accordion.Panel>
      </Accordion.Item>

      {/* React 19 Features */}
      <Accordion.Item value="react-19">
        <Accordion.Control className="font-semibold text-red-600">🔥 React 19 Features</Accordion.Control>
        <Accordion.Panel>
          <ul className="pl-0 space-y-3">
            <li><NavLink to="/actions" className={linkClasses}>Actions for Forms & Mutations</NavLink></li>
            <li><NavLink to="/use-action-state" className={linkClasses}>useActionState</NavLink></li>
            <li><NavLink to="/use-optimistic" className={linkClasses}>useOptimistic</NavLink></li>
            <li><NavLink to="/form-status" className={linkClasses}>FormStatus Component</NavLink></li>
            <li><NavLink to="/async-server" className={linkClasses}>Async Server Components</NavLink></li>
            <li><NavLink to="/document-metadata" className={linkClasses}>Document Metadata API</NavLink></li>
            <li><NavLink to="/ref-as-prop" className={linkClasses}>Ref as Prop</NavLink></li>
            <li><NavLink to="/context-improvements" className={linkClasses}>Context API Improvements</NavLink></li>
            <li><NavLink to="/react-compiler" className={linkClasses}>React Compiler (Auto Memoization)</NavLink></li>
          </ul>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  </ScrollArea>
);

export default Navbar;
