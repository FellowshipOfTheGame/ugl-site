import { cva } from '../../../styled-system/css';

export const pointyClicable = cva({
  base: {
    borderRadius: '12px',
    color: 'white',
    background: 'gradient-accent',
    cursor: 'pointer',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    width: 'fit-content',
    padding: '14px 24px',
    textStyle: 'barlowP',
    fontSize: { base: '18px', md: '22px' },
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'all .4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 15px rgba(247, 148, 33, 0.3)',
    position: 'relative',
    overflow: 'hidden',
    _before: {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      background:
        'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
      transition: 'left .6s ease',
    },
    _hover: {
      transform: 'translateY(-3px)',
      boxShadow: '0 8px 25px rgba(247, 148, 33, 0.5)',
      background: 'linear-gradient(135deg, #ffb84d 0%, #f79421 100%)',
    },
    _active: {
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 15px rgba(247, 148, 33, 0.4)',
    },
  },
});
