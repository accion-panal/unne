import React from 'react';
import { Link } from 'react-router-dom';
import ButtonClose from '../BottonClose/BottonClose';
import Logo from '../Logo/Logo';
import { Disclosure } from '@headlessui/react';
import { navigationData } from '../../data/navigation';
import ButtonPrimary from '../Button/ButtonPrimary';
import { iconsList } from '../Icons';

const NavMobile = ({ data = navigationData, onClickClose }) => {
  const { MdOutlineArrowDropDown } = iconsList;
  const _renderMenuChild = (item) => {
    return (
      <ul className="nav-mobile-sub-menu pl-6 pb-1 text-base">
        {item.children?.map((i, index) => (
          <Disclosure key={i.href + index} as="li">
            <Link
              to={i.href || '/'}
              className="flex px-4 py-2.5 text-black text-sm font-medium rounded-lg hover:bg-[#e5e7eb] mt-[2px]"
            >
              <span
                className={!i.children ? 'block w-full' : ''}
                onClick={onClickClose}
              >
                {i.name}
              </span>
              {i.children && (
                <span
                  className="block flex-grow"
                  onClick={(e) => e.preventDefault()}
                >
                  <Disclosure.Button
                    as="span"
                    className="flex justify-end flex-grow"
                  ></Disclosure.Button>
                </span>
              )}
            </Link>
            {i.children && (
              <Disclosure.Panel>{_renderMenuChild(i)}</Disclosure.Panel>
            )}
          </Disclosure>
        ))}
      </ul>
    );
  };

  const _renderItem = (item) => {
    return (
      <Disclosure
        key={item.id}
        as="li"
        className="text-neutral-900 dark:text-black"
      >
        <Link
          className="flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-[#e5e7eb] rounded-lg"
          to={{
            pathname: item.href || undefined,
          }}
        >
          <span
            className={!item.children ? 'block w-full' : ''}
            onClick={onClickClose}
          >
            {item.name}
          </span>
          {item.children && (
            <span
              className="block flex-grow"
              onClick={(e) => e.preventDefault()}
            >
              <Disclosure.Button
                as="span"
                className="flex justify-end flex-grow"
              >
                <MdOutlineArrowDropDown className="text-2xl" />
              </Disclosure.Button>
            </span>
          )}
        </Link>
        {item.children && (
          <Disclosure.Panel>{_renderMenuChild(item)}</Disclosure.Panel>
        )}
      </Disclosure>
    );
  };

  return (
    <div className="overflow-y-auto w-full max-w-sm h-screen py-2 transition transform shadow-lg ring-1 ring-[#FAB916] bg-white dark:bg-white  divide-y-2 divide-[#d5d7db]">
      <div className="py-6 px-5">
        <Logo />
        <div className="flex flex-col mt-5 text-neutral-700 dark:text-neutral-300 text-sm">
          <span>
            {/* Discover the most outstanding articles on all topics of life. Write
            your stories and share them */}
          </span>

          <div className="flex justify-between items-center mt-4">
            {/* <SocialsList itemClass="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-xl" /> */}
            <span className="block">
              {/* <SwitchDarkMode className="bg-neutral-100 dark:bg-neutral-800" /> */}
            </span>
          </div>
        </div>
        <span className="absolute right-2 top-2 p-1">
          <ButtonClose onClick={onClickClose} />
        </span>
      </div>
      <ul className="flex flex-col py-6 px-2 space-y-1 ">
        {data.map(_renderItem)}
      </ul>
      <div className="flex items-center justify-between py-6 px-5 space-x-2 ">
        <ButtonPrimary
          href={'/page-upload-item'}
          className="!px-10 bg-[#e5e7eb] hover:bg-[#cfd1d4]"
        >
          Contacto
        </ButtonPrimary>
        <ButtonPrimary
          href={'/page-upload-item'}
          className="!px-10 bg-[#e5e7eb] hover:bg-[#cfd1d4]"
        >
          Información
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default NavMobile;
