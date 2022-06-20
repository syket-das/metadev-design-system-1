import React from 'react';
import T1 from '../../components/typo/T1';
import T2 from '../../components/typo/T2';
import T3 from '../../components/typo/T3';
import T4 from '../../components/typo/T4';
import T5 from '../../components/typo/T5';
import T6 from '../../components/typo/T6';
import T7 from '../../components/typo/T7';
import T8 from '../../components/typo/T8';

import toast, { Toaster } from 'react-hot-toast';

const HomePage = () => {
  const notify = () =>
    toast('Here is your toast.', {
      duration: 4000,
      position: 'bottom-center',
      // Styling
      style: {},
      className: '',
      // Custom Icon
      icon: '👏',
      // Change colors of success/error/loading icon
      iconTheme: {
        primary: '#000',
        secondary: '#fff',
      },
      // Aria
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    });

  return (
    <div className="container px-4 py-4">
      <T1>This is a Dummy Text. Its Called T1</T1>
      <T2>This is a Dummy Text. Its Called T2</T2>
      <T3>This is a Dummy Text. Its Called T3</T3>
      <T4>This is a Dummy Text. Its Called T4</T4>
      <T5>This is a Dummy Text. Its Called T5</T5>
      <T6>This is a Dummy Text. Its Called T6</T6>
      <T7>This is a Dummy Text. Its Called T7</T7>
      <T8>This is a Dummy Text. Its Called T8</T8>

      <div className="mt-20">
        <button
          className="rounded-none border-2 p-3 border-teal-200	border-double outline-2 outline-blue-500/50

"
          onClick={notify}
        >
          Make me a toast
        </button>
        <Toaster
          toastOptions={{
            className: '',
            style: {
              border: '1px solid #fff',
              padding: '5px',
              color: '#fff',
              backgroundColor: '#000',
            },
          }}
        />
      </div>
    </div>
  );
};

export default HomePage;
