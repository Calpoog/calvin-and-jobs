import styles from './InfoBlock.module.scss';
import SVG from 'react-inlinesvg';
import classNames from 'classnames';

function InfoBlock({ icon, title, children }) {
  return (
    <section className={classNames(styles.infoBlock, 'd-flex', 'mb-4')}>
      <SVG className={classNames(styles.icon, 'flex-shrink-0')} src={icon} />
      <div className='flex-fill ps-2'>
        <h3 className={classNames(styles.title, 'fw-bold', 'pb-2', 'mb-3')}>
          {title}
        </h3>
        <div className={styles.body}>{children}</div>
      </div>
    </section>
  );
}

export default InfoBlock;
