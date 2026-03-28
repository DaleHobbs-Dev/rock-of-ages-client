import { useEffect } from "react"
import { deleteRock } from "../services"

export const RockList = ({ rocks, fetchRocks, showDelete }) => {
    useEffect(() => {
        fetchRocks();
    }, [fetchRocks])

    const handleDelete = async (rockId) => {
        try {
            await deleteRock(rockId);
            fetchRocks(); // Refresh the list after deletion
        } catch (error) {
            console.error("Error deleting rock:", error);
        }
    }

    const displayRocks = () => {
        if (rocks && rocks.length) {
            return rocks.map(rock => <div key={`key-${rock.id}`} className="border p-5 border-solid hover:bg-fuchsia-500 hover:text-violet-50 rounded-md border-violet-900 mt-5 bg-slate-50">
               <p>{rock.name} ({rock.type.label}) weighs {rock.weight} kg and was added by {rock.user.username}.</p>
               <p>This rock is in the collection of {rock.user.first_name} {rock.user.last_name}.</p>
               {showDelete && <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleDelete(rock.id)}>Delete</button>}
            </div>)
        }

        return <h3>Loading Rocks...</h3>
    }

    return (
        <>
            <h1 className="text-3xl">Rock List</h1>
            {displayRocks()}
        </>
    )
}
