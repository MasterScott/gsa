/* Greenbone Security Assistant
 *
 * Authors:
 * Björn Ricks <bjoern.ricks@greenbone.net>
 *
 * Copyright:
 * Copyright (C) 2016 - 2017 Greenbone Networks GmbH
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

import {classes} from '../../utils.js';

import PropTypes from '../proptypes.js';

import './css/table.css';

const Table = ({header, footer, children, className}) => {
  className = classes(className, 'table');

  return (
    <table className={className}>
      {header}
      {children}
      <tfoot>
        {footer}
      </tfoot>
    </table>
  );
};

Table.propTypes = {
  header: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  footer: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  className: PropTypes.string,
};

export default Table;

// vim: set ts=2 sw=2 tw=80:
