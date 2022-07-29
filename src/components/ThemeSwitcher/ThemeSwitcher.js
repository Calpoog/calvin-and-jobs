import classNames from 'classnames';
import { useEffect } from 'react';
import themes from '../../themes';
import styles from './ThemeSwitcher.module.scss';

function ThemeSwitcher({ className }) {
  useEffect(
    () => onThemeChange(localStorage.getItem('theme') || 'Peach Berry'),
    []
  );

  function onThemeChange(t) {
    localStorage.setItem('theme', t);
    for (let color in themes[t]) {
      document.documentElement.style.setProperty(
        `--${color}-color`,
        themes[t][color]
      );
    }
  }

  return (
    <div className={classNames(className, 'row gx-2 justify-content-center')}>
      {Object.keys(themes).map((name) => (
        <div className='col-auto'>
          <button
            onClick={() => onThemeChange(name)}
            className={styles.theme}
            style={{
              backgroundColor: themes[name]['info-pane'],
              borderColor: themes[name]['h1'],
            }}
          >
            <div className={styles.tooltip}>{name}</div>
          </button>
        </div>
      ))}
    </div>
  );
}

export default ThemeSwitcher;
