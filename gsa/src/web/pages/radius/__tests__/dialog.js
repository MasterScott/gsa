/* Copyright (C) 2019 Greenbone Networks GmbH
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 */
import React from 'react';

import {render, fireEvent} from 'web/utils/testing';

import Dialog from '../dialog';

describe('RADIUS dialog component tests', () => {
  test('should render dialog', () => {
    const handleClose = jest.fn();
    const handleSave = jest.fn();

    const {baseElement} = render(
      <Dialog
        enable={1}
        radiushost="foo"
        radiuskey="bar"
        onClose={handleClose}
        onSave={handleSave}
      />,
    );

    expect(baseElement).toMatchSnapshot();
  });

  test('should save data', () => {
    const handleClose = jest.fn();
    const handleSave = jest.fn();

    const {getByTestId} = render(
      <Dialog
        enable={1}
        radiushost="foo"
        radiuskey="bar"
        onClose={handleClose}
        onSave={handleSave}
      />,
    );

    const checkBox = getByTestId('dialog-save-button');
    fireEvent.click(checkBox);
    expect(handleSave).toHaveBeenCalledWith({
      enable: 1,
      radiushost: 'foo',
      radiuskey: 'bar',
    });
  });

  test('should allow to close the dialog', () => {
    const handleClose = jest.fn();
    const handleSave = jest.fn();

    const {getByTestId} = render(
      <Dialog
        enable={1}
        radiushost="foo"
        radiuskey="bar"
        onClose={handleClose}
        onSave={handleSave}
      />,
    );

    const closeButton = getByTestId('dialog-close-button');

    fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalled();
  });

  test('should allow to change data', () => {
    const handleClose = jest.fn();
    const handleSave = jest.fn();

    const {getByTestId} = render(
      <Dialog
        enable={1}
        radiushost="foo"
        radiuskey="bar"
        onClose={handleClose}
        onSave={handleSave}
      />,
    );

    const checkBox = getByTestId('enable-checkbox');
    fireEvent.click(checkBox);

    const radiusHostTextField = getByTestId('radiushost-textfield');
    fireEvent.change(radiusHostTextField, {target: {value: 'lorem'}});

    const radiusKeyTextField = getByTestId('radiuskey-textfield');
    fireEvent.change(radiusKeyTextField, {target: {value: 'ipsum'}});

    const saveButton = getByTestId('dialog-save-button');
    fireEvent.click(saveButton);

    expect(handleSave).toHaveBeenCalledWith({
      radiushost: 'lorem',
      enable: 0,
      radiuskey: 'ipsum',
    });
  });
});
