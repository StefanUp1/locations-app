import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AllLocation from './AllLocations';

test('loads and displays cards', async () => {
  render(<AllLocation />);

  expect(await screen.findAllByText(/users/i)).toHaveLength(6);
});

test('clicking location card opens modal with selected location data', async () => {
  render(<AllLocation />);

  fireEvent.click(await screen.findByText(/test location 2/i));

  expect(await screen.findByText(/done/i)).toBeInTheDocument();
  expect(await screen.findAllByText(/test location 2/i)).toHaveLength(2);
});

test('button click closes modal', async () => {
  render(<AllLocation />);

  fireEvent.click(await screen.findByText(/test location 2/i));
  expect(await screen.findByText(/done/i)).toBeInTheDocument();

  fireEvent.click(await screen.findByText(/done/i));
  expect(await screen.findAllByText(/test location 2/i)).toHaveLength(1);
});

const clickOnCardCloseModal = async () => {
  fireEvent.click(await screen.findByText(/test location 2/i));
  fireEvent.click(await screen.findByText(/done/i));
};

test('clicking location card increase view count', async () => {
  render(<AllLocation />);

  await clickOnCardCloseModal();
  expect(await screen.findByText(/1 views/i)).toBeInTheDocument();

  await clickOnCardCloseModal();
  expect(await screen.findByText(/2 views/i)).toBeInTheDocument();
});
