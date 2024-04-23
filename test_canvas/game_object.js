class GameObject {
    constructor (name, transform, space) {
        this.name = name
        this.transform = transform 
        this.visualization = visualization

        this.space = space
        this.create_obj()
    }

    create_obj() {
        this    
    }




}


class Visualization {
    constructor () {
        
    }
}

class StaticVisualization extends Visualization {
    constructor (frame) {
        super()
        this.frame = frame
    }
}

class StaticVisualization extends Visualization {
    constructor (frames) {
        super()
        this.frames = frames
    }

    
}

class Transform {
    constructor (coords, rotation, sizes) {
        this.coords = coords
        this.rotation = rotation
        this.sizes = sizes
    }
}

class Coords {
    constructor (x, y, z) {
        this.x = x
        this.y = y
        this.z = z    
    }

    set_coords (x = this.x, y= this.y, z= this.z) {
        this.x = x
        this.y = y
        this.z = z
    }

    get_coords () {
        return {
            x: this.x,
            y: this.y,
            z: this.z
        }
    }
}

class Rotation { 
    constructor (angle_rotation) {
        this.rotation = angle_rotation
    }

    set_rotation (rotation) {
        if (rotation > 360 || rotation < 0) return
        if (rotation === 360) this.rotation = 0
        this.rotation = rotation
    }

    get_rotation () {
        return this.rotation
    }
}

class SizesSquare {
    constructor (height, width) {
        this.height = height
        this.width = width
    }

    set_sizes(height = this.height, width = this.width) {
        this.height = height
        this.width = width
    }
}