/*
 * Copyright 2020 José Expósito <jose.exposito89@gmail.com>
 *
 * This file is part of Touchégg-GUI.
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation,  either version 3 of the License,  or (at your option)  any later
 * version.
 *
 * This program is distributed in the hope that it will be useful,  but  WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the  GNU General Public License along with
 * this program. If not, see <http://www.gnu.org/licenses/>.
 */
const { GObject, Gtk } = imports.gi;

export default GObject.registerClass({ GTypeName: 'SidebarHeader' },
  class SidebarHeader extends Gtk.Label {
    constructor(label) {
      super({ label });
      this.xalign = 0;

      if (Granite) {
        this.get_style_context().add_class(Granite.STYLE_CLASS_H4_LABEL);
      }
    }
  }
);
// export default SidebarHeader;
// export default GObject.registerClass({ GTypeName: 'SidebarHeader' }, SidebarHeader);