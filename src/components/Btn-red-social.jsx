"use client";

export default function BtnRedSocial ({ redSocial, link }) {
  return (
    <>
      <a href={link} target='_blank'>
        {redSocial}
      </a>
    </>
  );
}
