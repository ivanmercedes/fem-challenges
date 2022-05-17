import useTogleMenu from '../hooks/useToggleMenu';

const ToggleMenu = () => {
	const [showMenu, onClickMenu] = useTogleMenu();
	return (
		<>
			{showMenu ? (
				<svg
					style={{ width: 35, height: 35 }}
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					fill='currentColor'
					className='toggle-menu'
					viewBox='0 0 16 16'
					onClick={() => onClickMenu()}
					data-show={showMenu}
				>
					<path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
				</svg>
			) : (
				<svg
					style={{ width: 35, height: 35 }}
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					fill='currentColor'
					className='toggle-menu'
					viewBox='0 0 16 16'
					onClick={() => onClickMenu()}
					data-show={showMenu}
				>
					<path
						fillRule='evenodd'
						d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
					/>
				</svg>
			)}
		</>
	);
};

export default ToggleMenu;
